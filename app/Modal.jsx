

'use client'
import { useRouter } from "next/navigation";


export default function Modal({selectedDirection}) {


 
  const directionSwitch = (item) =>{
    switch(item) {
      case 'Left':
        return 'modal-left active';
        case 'Right':
        return 'modal-right active';
        case 'Bottom':
        return 'modal-bottom active';
        case 'Top':
        return 'modal-top active';
      default:
        return null;
    }
  }
    return(
        <>
        <div className={`modal ${directionSwitch(selectedDirection)}`} >
        <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
        </div>
        </>
    )
}