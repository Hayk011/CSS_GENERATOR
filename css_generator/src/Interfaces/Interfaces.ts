export interface IGenerate {
    id: number;
    name: string;
}
export interface IInputs {
    lineRange?: number
    reversLine?: boolean;
    borderRange?: number;
    reversBorder?: boolean
}

export interface ILieProps{
    setInputs: (e: any) => void
    inputs: IInputs;
    fild: string;
}

export interface IFilds {
    id: number;
    title: string;
}