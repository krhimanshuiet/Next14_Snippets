import { show } from '@/models/show';
import { getWebseries } from '@/services/webSeries'
import React from 'react'
import Show from '@/components/Show';
type Props = {}

const ShowsPage = async (props: Props) => {
    const shows = await getWebseries();
  return (
    <div>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-2 p-4'>
            {shows?.results?.map((item:show) => <Show key={item.imdbid} {...item}/>)}
        </div>
    </div>
  )
}

export default ShowsPage;