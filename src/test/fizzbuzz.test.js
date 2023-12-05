import { describe, expect, it } from "vitest";
import { Fizzbuzz } from "../fizzbuzz";

describe("Fizzbuzz", () => {
  it("debe ser un fuction", () => {
    expect(typeof Fizzbuzz).toBe("function");
  })
  it("debe devolver un numero", () => {
    expect(() => Fizzbuzz()).toThrow();
  })
  it("debe devolver un mensaje de error si no es un numero", () => {
    expect(() => Fizzbuzz()).toThrow("No es un numero lo que es ingresando");
  })
  it("debe devolver un 1", () => {
    expect(Fizzbuzz(1)).toBe(1);
  })


  it("debe devolver un 2", () => {
    expect(Fizzbuzz(2)).toBe(2);
  })


  it("debe devolver un FIZZ si es un 3", () => {
    expect(Fizzbuzz(3)).toBe("FIZZ");
  })


  it("debe devolver un FIZZ si es un multiplo de 3", () => {
    expect(Fizzbuzz(6)).toBe("FIZZ");
    expect(Fizzbuzz(9)).toBe("FIZZ");
    expect(Fizzbuzz(12)).toBe("FIZZ");
  })


  it("debe devolver un BUZZ si es un 5", () => {
    expect(Fizzbuzz(5)).toBe("BUZZ");
  })


  it("debe devolver un BUZZ si es un multiplo de 5", () => {
    expect(Fizzbuzz(10)).toBe("BUZZ");
    expect(Fizzbuzz(20)).toBe("BUZZ");
  })


  it("debe devolver un FIZZBUZZ si es un multiplo de 3 y 5", () => {
    expect(Fizzbuzz(15)).toBe("FIZZBUZZ");
  })


})
