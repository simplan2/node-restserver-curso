// =========================
// Puerto
// =========================

process.env.PORT = process.env.PORT || 3000;


// =========================
// Entorno
// =========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =========================
// Base de Datos
// =========================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;
// =========================
// FECHA DE EXPIRACIÓN
// =========================
//60 segundos
//60 minutos
//24 horas
//30 días
// process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.CADUCIDAD_TOKEN = '48h';

// =========================
// SEED DE AUTENTIFICAIÓN
// =========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =========================
// Google Client ID
// =========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '1067420444411-fit8li4otkunq371mcbj9jvmtbkd0vlg.apps.googleusercontent.com';