import css from './KanbanBoard.module.css';
import Board, { moveCard, moveColumn, removeCard, addCard } from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css'
import useBoard from '../../store/KanbanStore';

<!-- // "@asseinfo/react-kanban": "^2.2.0", -->

const KanbanBoard = () => {

    const { board, setBoard } = useBoard();

    return (
        <div className={css.board_container}>
            <span>Trello/Kanban Board</span>

            {/* <Board>
                {board}
            </Board> */}

            <Board
                board={board}
                onCardDragEnd={(card, source, destination) =>
                    setBoard(moveCard(board, source, destination))
                }
            />
        </div>
    )
}

export default KanbanBoard
