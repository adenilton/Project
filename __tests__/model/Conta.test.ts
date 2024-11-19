import { Conta } from "../../src/model/Conta";

describe("Conta", () => {
  test("sacar com sucesso", async () => {
    const conta: Conta = new Conta("123456", 5000.0);
    conta.sacar(200.0);
    expect(conta.saldo).toBe(4800.00);
  });
});