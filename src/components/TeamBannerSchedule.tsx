import React, { FC } from 'react'
import { cva } from '../../styled-system/css'

type TeamBannerScheduleProps = {
  result: 'win' | 'loss' | 'tie'
  teamName: string
}

export const TeamBannerSchedule: FC<TeamBannerScheduleProps> = ({
  result,
  teamName,
}) => {
  return <div className={banner({ result })}>{teamName}</div>
}

const banner = cva({
  base: {
    display: 'flex',
    minWidth: '200px',
    m: 1,
  },
  variants: {
    result: {
      win: { bg: 'green.600', color: 'white' },
      loss: { bg: 'red.600', color: 'white' },
      tie: { bg: 'orange.600', color: 'white' },
    },
  },
})
