"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Módulo HTTP do Node
const http_1 = __importDefault(require("http"));
// Constante server representa o servidor Web de Backend
/* const server = http.createServer( (req, res) => {
    // O servidor ainda não faz nada
}); */
// Constante server representa o servidor Web de Backend
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Primeiro servidor do Pedro, funcionando!");
});
// Definindo o servidor na porta 3000
server.listen(3000, () => {
    console.log("Servidor, porta: 3000");
});
