function getInputValue(elementID: string): string {
    const elementTarget: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return elementTarget.value;
}


function logger(message :  string): void {
    console.log(message);
}

export { getInputValue as getValue, logger }