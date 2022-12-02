class Tv {
    constructor(brand) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    volumeUp(num) {
        if (this.volume + num <= 100) {
            this.volume += num
        } else {
            this.volume = 100
        }
    }

    volumeDown(num) {
        if(this.volume- num <= 0) {
            this.volume-=num
        } else {
            this.volume=0
        }
    }
    setChannel(num) {
        if (num<=50 && num>=0) {
            this.channel=num
        }
    }
    reset() {
        this.channel = 1
        this.volume = 50

    }
    describe() {

        console.log(`Ovo je ${this.brand} na kanalu ${this.channel}, ton je ${this.volume}`)

    }
}

obj1 = new Tv("blablabla")
obj1.describe()
obj1.volumeUp(200)
obj1.describe()
obj1.setChannel(300)
obj1.describe()
obj1.reset()
obj1.describe()