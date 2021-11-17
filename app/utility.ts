class Utility {

    static getInputValue(elementID: string): string {
        const elementTarget: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
        return elementTarget.value;
    }
}

