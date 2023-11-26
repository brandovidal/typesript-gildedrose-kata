export class ItemSellIn {
	private value: number

	constructor (value: number) {
		this.value = value
	}

	decrease (): void {
		this.value -= 1
	}

	isLessThan (days: number): boolean {
		return this.value < days
	}
}
