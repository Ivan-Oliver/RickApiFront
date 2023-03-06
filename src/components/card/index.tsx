import { FC, memo } from 'react'
import { ButtonDetails, Container, Description, Image } from './styles'
import { Props } from './types'

const Card: FC<Props> = ({
    characterId,
    name,
    status,
    species,
    image,
    onClick,
    id,
    children,
    type,
}) => {



    return (
        <>
            <Container>
                <Image src={image} />
                {type === "list" && (
                    <>
                        {/* <Description>Id: {characterId}</Description> */}
                        <Description>Name: {name}</Description>
                        <Description>Status: {status}</Description>
                        <Description>Species: {species}</Description>
                        <ButtonDetails to={`/characterdetails/${characterId}`}>View character</ButtonDetails>
                        {children}
                    </>
                )}
                {type === 'details' && (

                    <>
                        <Description>Id: {characterId}</Description>
                        <Description>Name: {name}</Description>
                        <Description>Status: {status}</Description>
                        <Description>Species: {species}</Description>
                        {children}
                    </>
                )}
            </Container>
        </>
    )
}

export default memo(Card)