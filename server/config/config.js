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
    urlDB = process.env.NODE_ENV.MONGO_URI;
}

process.env.URLDB = urlDB;
// mongodb://localhost:27017/cafe

// mongodb+srv://juanjo:simplan@cafe.0cla6.mongodb.net/Cafe?retryWrites=true&w=majority