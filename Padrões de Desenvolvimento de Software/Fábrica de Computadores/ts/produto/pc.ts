import { Produto } from "./produto";

export class PC implements Produto {
    constructor(private type: string, private ram: number, private ssd: number, private cpu: number) {}
    getType() {
        return this.type;
      }
    getRam() {
        return this.ram;
    }
    getSsd() {
        return this.ssd
    }
    getCpu() {
        return this.cpu;
    }
    toString() {
        return `Produto: ${this.type} | Memória RAM: ${this.ram}GB | SSD: ${this.ssd}GB | CPU: ${this.cpu}GHz`;
    }
  }