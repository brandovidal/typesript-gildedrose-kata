export class ItemQuality {
	private static MAX_QUALITY = 50
	private static MIN_QUALITY = 0

	private value: number

	constructor (value: number) {
		this.value = value
	}

	get currentValue () {
		return this.value
	}

	increase (): void {
		if (this.value < ItemQuality.MAX_QUALITY) {
			this.value += 1
		}
	}

	decrease (): void {
		if (this.value > ItemQuality.MIN_QUALITY) {
			this.value -= 1
		}
	}

	reset (): void {
		this.value = 0
	}
}
