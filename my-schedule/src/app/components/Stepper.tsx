'use client';

import { useState } from "react";

const steps = ['정보 입력', '검토', '완료']

export default function Stepper(){
    const [currentStep, setCurrentStep] = useState<number>(0);

    const nextStep = () => {
        if(currentStep < steps.length - 1){
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if(currentStep > 0){
            setCurrentStep(currentStep - 1);
        }
    };

    const progressPercent = ((currentStep + 1) / steps.length) * 100;

    return(
        <div>
            <div>
                
            </div>
        </div>
    )
}