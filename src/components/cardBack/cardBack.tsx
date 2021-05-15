import { useSelector } from 'react-redux';
import InitialState from '../../types/initialState';
import styles from './cardBack.module.scss';

const CardBack = () => {
    const { bgColor, imageSize, bgPattern } = useSelector((state: InitialState) => state);
    return (
        <div id={'cardBack'} className={styles.cardContainer} style={{
            backgroundColor: bgColor,
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: `${imageSize}%`,
        }}>
            <div className={styles.bgImage}>
            </div>
            <div className={styles.header}>
                <div className={styles.magneticStrip} />
                <div className={styles.signaturePanel}>
                    <div className={styles.horizontalLine} />
                    <div className={styles.horizontalLine} />
                    <div className={styles.horizontalLine} />
                    <div className={styles.horizontalLine} />
                    <div className={styles.horizontalLine} />
                </div>
            </div>
        </div>
    )
}

export default CardBack;

