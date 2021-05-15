import { useSelector } from 'react-redux';
import { ReactComponent as CompanyNameIcon } from '../../images/visa.svg';
import InitialState from '../../types/initialState';
import styles from './cardFront.module.scss';

const CardFront = () => {
    const { bgColor, imageSize, bgPattern } = useSelector((state: InitialState) => state);
    return (
        <div id={'cardFront'} className={styles.cardContainer}>
            <div className={styles.card} style={{
                backgroundColor: bgColor,
                backgroundImage: `url(${bgPattern})`,
                backgroundSize: `${imageSize}%`,
            }}>
                <div className={styles.blackGradient} />
                <div className={styles.bgImage}>
                </div>
                <div className={styles.header}></div>
                <div className={styles.footer}>
                    <div className={styles.section}>
                        <div className={styles.cardNumbers}>
                            <div className={styles.numberSection}>
                                <div className={styles.number}>4</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                            </div>
                            <div className={styles.numberSection}>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                            </div>
                            <div className={styles.numberSection}>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                            </div>
                            <div className={styles.numberSection}>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                                <div className={styles.number}>1</div>
                            </div>
                        </div>
                        <div className={styles.expiryContainer}>
                            <div className={styles.validThru}>
                                Valid Thru
                        </div>
                            <div className={styles.expiryDate}>12/23</div>
                        </div>
                    </div>
                    <CompanyNameIcon />
                </div>
            </div>
        </div >
    )
}

export default CardFront;

