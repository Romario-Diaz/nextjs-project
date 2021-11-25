
import React, { useState, useMemo } from "react"
import Checkbox from '@mui/material/Checkbox'
import { useBooks } from './BooksContext'

const label = { inputProps: { 'aria-label': 'Audiobooks' } }

const FilterBooks = () => {

    const { checkedOne, checkedTwo, getAllAudioBooks, getAllEbooks } = useBooks()

    return (
        <div className="filter__container">
            <h5 className="filter__category" />
            <div className="filter__filters">
                <div className="">
                    <Checkbox
                        {...label}
                        checked={checkedOne}
                        color="warning"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                        onChange={getAllAudioBooks}
                    />
                    <label htmlFor="checkAudioBooks" className="label__check">Audio Books</label>
                </div>
                <div className="">
                    <Checkbox
                        {...label}
                        checked={checkedTwo}
                        color="warning"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                        onChange={getAllEbooks}
                    />
                    <label htmlFor="checkFreeEbooks" className="label__check">Free Ebooks</label>
                </div>
            </div>
        </div>
    )
}

export default FilterBooks