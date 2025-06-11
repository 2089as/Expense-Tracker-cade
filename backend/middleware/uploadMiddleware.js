const multer = require('multer');

// Cấu hình nơi lưu trữ file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Thư mục lưu file tải lên
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Đặt tên file với timestamp để tránh trùng
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Bộ lọc loại file
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Cho phép tải lên
  } else {
    cb(new Error('Chỉ chấp nhận các định dạng .jpeg, .jpg và .png'), false);
  }
};

// Khởi tạo middleware upload
const upload = multer({ storage, fileFilter });
 module.exports = upload;