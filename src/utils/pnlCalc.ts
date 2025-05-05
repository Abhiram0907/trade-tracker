export function pnlCalc(initial_balance: string, current_balance: string) {
    const start = parseFloat(initial_balance)
    const current = parseFloat(current_balance)
    return current - start
}
  