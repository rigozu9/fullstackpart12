import { render, screen } from "@testing-library/react"
import Todo from "./Todo"
import { describe, it, expect } from "vitest"

describe("Todo", () => {
  it("renders todo text and status", () => {
    const todo = { _id: "1", text: "Vie koira ulos", done: false }

    render(<Todo todo={todo} onDelete={() => {}} onComplete={() => {}} />)

    expect(screen.getByText("Vie koira ulos")).toBeTruthy()
    expect(screen.getByText("This todo is not done")).toBeTruthy()
  })
})
