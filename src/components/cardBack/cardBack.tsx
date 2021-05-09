import { useSelector } from 'react-redux';
import { ReactComponent as StarPattern } from '../../images/star-filled.svg';
import InitialState from '../../types/initialState';
import styles from './cardBack.module.scss';
import HexPattern from '../../images/hex-pattern.png';

const CardBack = () => {
    const { bgColor, imageSize, opacityValue } = useSelector((state: InitialState) => state);
    return (
        <div id={'cardBack'} className={styles.cardContainer} style={{
            backgroundColor: bgColor,
            backgroundImage: `url(${HexPattern})`,
            backgroundSize: `${imageSize}%`,
        }}>
            <div className={styles.bgImage}>
                {/* <StarPattern width={`${(parseInt(imageSize, 10) + 100).toString()}%`} opacity={`${opacityValue}%`} /> */}
            </div>
            <div className={styles.header}>
                <div className={styles.magneticStrip} />
                <div className={styles.signaturePanel}>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.horizontalLine}></div>
                </div>
            </div>
        </div>
    )
}

export default CardBack;

