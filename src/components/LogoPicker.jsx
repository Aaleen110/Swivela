import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  X, 
  Image as ImageIcon, 
  Check, 
  AlertCircle,
  Trash2,
  Download,
  Eye,
  Crop,
  RotateCcw
} from 'lucide-react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import { useWebsiteStore } from '../store/useWebsiteStore';
import 'react-image-crop/dist/ReactCrop.css';

const LogoPicker = ({ isOpen, onClose }) => {
  const { websiteConfig, updateWebsiteConfig } = useWebsiteStore();
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(websiteConfig.logo);
  const [error, setError] = useState('');
  const [showCropper, setShowCropper] = useState(false);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [imgSrc, setImgSrc] = useState('');
  const fileInputRef = useRef(null);
  const imgRef = useRef(null);

  // Crop functions
  const onImageLoad = useCallback((e) => {
    const { width, height } = e.currentTarget;
    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        1,
        width,
        height
      ),
      width,
      height
    );
    setCrop(crop);
  }, []);

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('No 2d context');
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error('Canvas is empty');
            return;
          }
          blob.name = fileName;
          const fileUrl = URL.createObjectURL(blob);
          resolve(fileUrl);
        },
        'image/png',
        1
      );
    });
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    setError('');
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }
    
    // Show cropper
    const reader = new FileReader();
    reader.onload = (e) => {
      setImgSrc(e.target.result);
      setShowCropper(true);
    };
    reader.readAsDataURL(file);
  };

  const handleCropComplete = async () => {
    if (!completedCrop || !imgRef.current) return;
    
    try {
      const croppedImageUrl = await getCroppedImg(imgRef.current, completedCrop, 'cropped-logo.png');
      setPreview(croppedImageUrl);
      setShowCropper(false);
      setImgSrc('');
    } catch (error) {
      setError('Failed to crop image');
    }
  };

  const handleCancelCrop = () => {
    setShowCropper(false);
    setImgSrc('');
    setCrop(undefined);
    setCompletedCrop(undefined);
  };

  const handleSave = () => {
    if (preview) {
      updateWebsiteConfig({ logo: preview });
      onClose();
    }
  };

  const handleRemove = () => {
    setPreview(null);
    updateWebsiteConfig({ logo: null });
  };

  const handleClose = () => {
    setPreview(websiteConfig.logo);
    setError('');
    setShowCropper(false);
    setImgSrc('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Logo Upload</h2>
                <p className="text-sm text-gray-500">Upload your company logo</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Cropper Section */}
            {showCropper && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Crop Your Logo</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleCancelCrop}
                      className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                    <button
                      onClick={handleCropComplete}
                      className="flex items-center space-x-1 px-3 py-1.5 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <Crop className="w-4 h-4" />
                      <span>Crop & Apply</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={1}
                    minWidth={100}
                    minHeight={100}
                  >
                    <img
                      ref={imgRef}
                      alt="Crop me"
                      src={imgSrc}
                      style={{ maxHeight: '400px', maxWidth: '100%' }}
                      onLoad={onImageLoad}
                    />
                  </ReactCrop>
                </div>
                
                <div className="text-sm text-gray-500 text-center">
                  Drag the corners to adjust the crop area. The logo will be cropped to a square format.
                </div>
              </div>
            )}

            {/* Current Logo Preview */}
            {preview && (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-900">Current Logo</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleRemove}
                      className="flex items-center space-x-1 px-3 py-1.5 text-sm text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-xl border-2 border-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={preview}
                      alt="Logo preview"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Upload Area - Show only when no logo and no cropper */}
            {!preview && !showCropper && (
              <div
              className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-200 ${
                dragActive
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors ${
                  dragActive ? 'bg-indigo-100' : 'bg-gray-200'
                }`}>
                  <Upload className={`w-8 h-8 ${dragActive ? 'text-indigo-600' : 'text-gray-500'}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {dragActive ? 'Drop your image here' : 'Upload Logo'}
                </h3>
                
                <p className="text-gray-500 mb-4">
                  Drag and drop your logo here, or click to browse
                </p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <span>PNG, JPG, SVG</span>
                  <span>•</span>
                  <span>Max 5MB</span>
                  <span>•</span>
                  <span>Recommended: 200x200px</span>
                </div>
              </div>
            </div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl"
              >
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-sm text-red-700">{error}</span>
              </motion.div>
            )}

            {/* Logo Guidelines */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">Logo Guidelines</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Use high-resolution images for crisp display</li>
                <li>• Transparent backgrounds work best</li>
                <li>• Square or rectangular logos are recommended</li>
                <li>• Avoid text-heavy logos for better readability</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
            <div className="text-sm text-gray-500">
              {preview ? 'Logo ready to save' : 'No logo selected'}
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!preview}
                className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${
                  preview
                    ? 'text-white bg-indigo-600 hover:bg-indigo-700'
                    : 'text-gray-400 bg-gray-200 cursor-not-allowed'
                }`}
              >
                Save Logo
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LogoPicker;
