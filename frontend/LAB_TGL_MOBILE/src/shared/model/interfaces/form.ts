import { Control } from 'react-hook-form';
import { NavButtonType } from './../enums/form';

export interface IConfigInput {
    controller: IConfigController;
    index?: number;
    params: {
        placeholder: string;
        secureTextEntry?: boolean;
    }
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

export interface IConfigController {
    name: string;
    control: any;
    hasError: boolean;
}

export interface IForm {
    title: string;
    marketing?: boolean;
    link?: IConfigLink;
    inputs: IConfigInput[];
    primaryButton: IConfigNavButton;
    secondaryButton?: IConfigNavButton;
}