import { describe, it, expect } from "vitest";
import { reconfigure } from "../reconfigure";

describe("reconfigure", () => {

    // it("debe ser un function", () => {
    //     expect(reconfigure).toBeTypeOf("function");
    // })
    
    it("debe escribir una primera letra", () => {
        expect(() => reconfigure()).toThrow();
    })

    it("la primera letra debe ser un string", () => {
        expect(() => reconfigure(5)).toThrow();
    })

    it("la segunda letra debe ser un string", () => {
        expect(() => reconfigure("a")).toThrow();
    })

    it("regresar un boolean", () => {
        expect(reconfigure("a", "b")).toBeTypeOf("boolean");
    })

    it("la longitud no es la permitida", () => {
        expect(reconfigure("abc", "de")).toBe(false);
    })

    it("la longitud no es la permitida con letras iguales", () => {
        expect(reconfigure("aab", "ab")).toBe(false);
    })

    it("las letras proporcionadas son distintas al numero de letras", () => {
        expect(reconfigure("abc", "ddd")).toBe(false);
    })

    it("las letras proporcionadas tienen distinto orden de transformacion", () => {
        expect(reconfigure("xbox", "xxbo")).toBe(false);
    })


})