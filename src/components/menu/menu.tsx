import { useDispatch, useSelector } from "react-redux"
import { ACTIONS } from "../../state/actions";
import InitialState from "../../types/initialState";
import styles from './menu.module.scss';

const Menu = () => {
    const { bgColor, imageSize, opacityValue } = useSelector((state: InitialState) => state);
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.menuContainer}>
                <div className={styles.menuItem}>
                    <label htmlFor="color">COLOR:</label>
                    <input
                        id="color"
                        type="color"
                        value={bgColor}
                        onChange={(e) => {
                            dispatch({
                                type: ACTIONS.BG_COLOR,
                                payload: e.target.value,
                            })
                        }}
                    />
                </div>
                <div className={styles.menuItem}>
                    <label htmlFor="patternSize">SIZE:</label>
                    <input
                        id={"patternSize"}
                        value={imageSize}
                        onChange={(e) => {
                            dispatch({
                                type: ACTIONS.IMAGE_SIZE,
                                payload: e.target.value,
                            })
                        }}
                        min="40"
                        max="100"
                        type="range"
                        name=""
                    />
                </div>
                {/* <input
                type="range"
                name=""
                id=""
                value={opacityValue}
                onChange={(e) => {
                    dispatch({
                        type: ACTIONS.OPACITY,
                        payload: e.target.value,
                    })
                }}
                min="10" max="100" /> */}
                {/* <input type="color" onChange={onPatternColorChange} value={patternColor} /> */}
            </div>
        </>
    )
}

export default Menu
