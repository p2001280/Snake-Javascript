/*Nous créons le serpent,
et lui attribuons une position
donnée*/
class Snake {
    constructor(size) {
        this.x = 0;
        this.y = 0;
        this.blockSize = size;
        this.blocks = [];
        this.addBlock(this.x, this.y);
        //console.log(this.blocks);
    }

    /*addBlock permet de placer les éléments
    qui affiche ce que mange le serpent*/
    addBlock(x, y) {
        const block = new Block(x, y, this.blockSize);
        this.blocks.push(block);
    }

    update() {
        for(const block of this.blocks) {
            block.draw();
        }
    }
}


