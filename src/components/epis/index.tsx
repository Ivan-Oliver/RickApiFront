import { FC, memo} from 'react'
import { Contaner, Description } from './styles'
import { Props } from './types'

const Epis: FC<Props> = ({
    episodeId,
    name,
    air_date,
    episode,
    onClick,
    id
}) => {



    return (
        <>
            <Contaner>
                <Description>Id: {episodeId}</Description>
                <Description>name: {name}</Description>
                <Description>air_date : {air_date}</Description>
                <Description>episode: {episode}</Description>
            </Contaner>
        </>
    )
}

export default memo(Epis)