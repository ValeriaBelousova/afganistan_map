import React, {useState} from 'react';

export const Afganistan_Timeline_P = (status: any) => {
    console.log(status);
    if (status.status === 'july_2021') {
        return (<p>Войска НАТО покидают Баграм</p>);
    }
    else if (status.status === 'september_2021') {
        return (<p>Силы сопротивления передислоцировались в Панджшер</p>);
    }
    else if (status.status === 'june_2021') {
        return (<p>Активизация Талибан</p>);
    }
    else if (status.status === 'august_2021') {
        return (<p>Окружение и взятие Кабула. Бегство президента Ашрафа Гани</p>);
    }
    else if (status.status === '1_may_2021') {
        return (<p>Официальная дата окончательного вывода вооружённых сил НАТО</p>);
    }
    else {
        console.log('not return p el');
        return null
    }
}