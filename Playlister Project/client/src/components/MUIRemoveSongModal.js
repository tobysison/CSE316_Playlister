import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Typography} from '@mui/material'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 270,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIRemoveSongModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleConfirmRemoveSong () {
        store.addRemoveSongTransaction();
    }

    function handleCancelRemoveSong () {
        store.hideModals();
    }
    
    let modalClass = "modal";
    if (store.isRemoveSongModalOpen()) {
        modalClass += " is-visible";
    }

    let songTitle = "";
    if (store.currentSong) {
        songTitle = store.currentSong.title;
    }

    return (
        <Modal open={store.currentModal === "REMOVE_SONG"}>
            <Box sx={style}>
            <Box>
                    <Typography variant='h4'>
                        Remove <b>{songTitle}</b>?
                    </Typography>
                </Box>
                <hr></hr>
                <Box>
                    <Typography variant='h5'>
                        Are you sure you wish to permanently remove <span>{songTitle}</span> from the playlist?
                    </Typography>
                </Box>
                <Box>
                    <Button variant='contained' sx={{float: 'right', fontSize: '1.0rem'}} onClick={handleCancelRemoveSong}>
                        Cancel
                    </Button>
                    <Button variant='contained' sx={{float: 'right', fontSize: '1.0rem'}} onClick={handleConfirmRemoveSong}>
                        Confirm
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}