import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { Calculadora, operaciones, igualdad } from "../calculator";


describe("calculadora", () => {

  afterEach(cleanup);
  it("debe renderizar", () => {
    render(<Calculadora />);
  })

  it("debe renderizar el titulo", () => {
    render(<Calculadora />);
    screen.getByText("Calculadora");
  })

  it("debe renderizar un numero", () => {
    render(<Calculadora />);
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numeros.forEach((numero) => {
      screen.getByText(numero);
    })
  })

  it("debe tener 4 filas", () => {
    render(<Calculadora />);

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(4)
  });

  it("debe tener las operaciones", () => {
    render(<Calculadora />)

    operaciones.forEach((operaciones) => {
      screen.getByText(operaciones);
    })
  })

  it("debe tener simbolo de igualdad =", () => {
    render(<Calculadora />)
    screen.getByText("=")
  })

  it("debe renderizar un input", () => {
    render(<Calculadora />)
    screen.getByRole("textbox")
  });

  it("debe renderizar al presionar un numero", () => {
    render(<Calculadora />)
    
    const uno = screen.getByText("1")
    fireEvent.click(uno)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("1")
  });

  it("debe renderizar al presionar varios numeros", () => {
    render(<Calculadora />);
    
    const uno = screen.getByText("1")
    fireEvent.click(uno)

    const dos = screen.getByText("2")
    fireEvent.click(dos)

    const tres = screen.getByText("3")
    fireEvent.click(tres)

    const cuatro = screen.getByText("4")
    fireEvent.click(cuatro)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("1234")
  })

  it("debe mostrar los numeros y la operaciones", () => {
    render(<Calculadora />)
    
    const uno = screen.getByText("1")
    fireEvent.click(uno)

    const plus = screen.getByText("+")
    fireEvent.click(plus)
    fireEvent.click(uno)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("1+1")

  })

  it("debe mostrar el resultado de la operacion" , () => {
    render(<Calculadora />)
    
    const uno = screen.getByText("1")
    fireEvent.click(uno)

    const plus = screen.getByText("+")
    fireEvent.click(plus)
    fireEvent.click(uno)

    const igual = screen.getByText(igualdad)
    fireEvent.click(igual)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("2")
  })

});
