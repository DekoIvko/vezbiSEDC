interface Sostojki {
    jajca: number,
    brashno: number,
    mleko: number
}


class Recept {
    constructor(public name: string, public source: string, public sostojki: Sostojki) {

    }
}