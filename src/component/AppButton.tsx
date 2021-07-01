import React from 'react'

type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    title: string,
    enabled: boolean,
}

const AppButton: React.FC<Props> = ({onClick, title, enabled}: Props) => {
    return (
        <button onClick={onClick} disabled={enabled}>
            { title }
        </button>
    )
}

export default AppButton