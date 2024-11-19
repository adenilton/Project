export class Conta {
    private _numero: string;
    private _saldo: number;

    public constructor(numero: string, saldo: number){
      this._numero = numero;
      this._saldo = saldo;
    }

    public sacar(valor: number): void {
      this._saldo -= valor;
    }
    
    public get saldo() : number {
      return this._saldo;
    }

    public get numero(): string {
      return this._numero;
    }

    public depositar(valor: number): void {
      this.validarValor(valor);
    
      this._saldo += valor;
    }

    private validarValor(valor: number): void {
      console.log(valor);
      if(valor <= 0) {
        console.log("valor não pode ser igual ou menor que zero");
        throw new Error("valor não pode ser igual ou menor que zero");
      }
    }
}