import { FC, memo} from 'react'
import { Container, Description } from './styles'
import { Props } from './types'

const Locat: FC<Props> = ({
    locationId,
    name,
    types,
    dimension,
    onClick,
    id
}) => {



    return (
        <>
            <Container>
                <Description>Id: {locationId}</Description>
                <Description>name: {name}</Description>
                <Description>type: {types}</Description>
                <Description>dimension: {dimension}</Description>
            </Container>
        </>
    )
}

export default memo(Locat)