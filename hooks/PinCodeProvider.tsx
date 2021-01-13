import { createContext, useState } from 'react';

type Props = {
    children: React.ReactNode;
};

export type PinCodeContextType = {
    pinCode: string | null
    setPinCode: (code: string) => void;
}

const PinCodeContext = createContext<PinCodeContextType>({ pinCode: '', setPinCode: pinCode => console.warn('no theme provider', pinCode) });

const PinCodeProvider: React.FC<Props> = ({ children }: Props) => {
    const [pinCode, setPinCode] = useState<string>('');

    return (<PinCodeContext.Provider value={{ pinCode, setPinCode }}>
        {children}
    </PinCodeContext.Provider>);
};

export { PinCodeProvider, PinCodeContext };