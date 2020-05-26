export interface IGenerate {
    id: number;
    name: string;
}
export interface IInputs {
    range?: number
    reversLine?: boolean
}

export interface ILieProps{
    setInputs: (e: any) => void
    inputs: IInputs
    style: React.CSSProperties;
    fild: string;
}

export interface IFilds {
    id: number;
    title: string;
}