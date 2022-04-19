import { Control } from 'react-hook-form';
import { NavButtonType } from './../enums/form';

export interface IConfigInput {
    placeholder: string;
    secureTextEntry?: boolean;
}

export interface IConfigNavButton {
    label: string;
    iconArrowLeft?: boolean;
    iconArrowRight?: boolean;
    type: NavButtonType
    onPressHandler: () => void;
}

export interface IConfigLink {
    label: string;
    onPress: () => void;
}

export interface IConfigControl {
    name: string;
    control: Control;
}

export interface IForm {
    title: string;
    link?: IConfigLink;
    inputs: IConfigInput[];
    primaryButton: IConfigNavButton;
    secondaryButton: IConfigNavButton;
}