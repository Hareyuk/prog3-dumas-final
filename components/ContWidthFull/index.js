import { ContainerDiv } from './styles'

const ContWidthFull = (props, {children}) => {
    return (
        <ContainerDiv BColor={props.BColor}>
            {children}
        </ContainerDiv>
    )
}

export default ContWidthFull;