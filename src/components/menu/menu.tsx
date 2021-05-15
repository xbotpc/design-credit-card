import cx from 'classnames';
import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../state/actions";
import InitialState from "../../types/initialState";
import styles from './menu.module.scss';

interface MenuProps {
    patterns: Array<string>
}

const Menu = ({ patterns }: MenuProps) => {
    const patternsBox = useRef<HTMLDivElement>(null);

    const { bgColor, imageSize } = useSelector((state: InitialState) => state);
    const dispatch = useDispatch();

    const onPatternClick = (index: number) => {
        dispatch({
            type: ACTIONS.BG_PATTERN,
            payload: patterns[index]
        });
    }

    const renderPatternOptions = (imagePatterns: Array<any>) => {
        return imagePatterns.map((pattern: any, i: number, arr: typeof imagePatterns) => {
            return (
                <Fragment key={i.toString()}>
                    <button className={cx(styles.patternOption, { [styles.last]: arr.length - 1 === i })}
                        onClick={() => onPatternClick(i)}
                    >
                        <img src={pattern} alt="pattern" />
                    </button>
                </Fragment>
            )
        })
    };

    const onScrollClick = (direction: 'next' | 'back') => {
        patternsBox.current?.scrollBy(direction === 'next' ? 200 : -200, 0);
    }

    console.log('here1')
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
                            });
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
                            });
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
                <div className={styles.menuItem}>
                    <label>CHOOSE PATTERN:</label>
                    <div className={styles.optionsContainer} ref={patternsBox}>
                        <button
                            className={styles.left}
                            type="button"
                            onClick={() => onScrollClick('back')}>
                            {"<"}
                        </button>
                        {renderPatternOptions(patterns)}
                        <button
                            className={styles.right}
                            type="button"
                            onClick={() => onScrollClick('next')}>
                            {">"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
