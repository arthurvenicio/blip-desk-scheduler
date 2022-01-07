import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import './style.css';

const HoursList = ({
    workTimes,
    index,
    changeStart,
    changeEnd,
    removeWorkTime,
    addWorkTime
}) => {
    const { t } = useTranslation();

    return (
        <div id="box-h">
            {workTimes.map((element, indexHour) => (
                <>
                    <Input
                        name="start"
                        label={t('labels.start')}
                        placeholder="HH:MM"
                        icon="clock"
                        value={element.start}
                        dataTestId={`ipt-change-start-work-time-${index}-${indexHour}`}
                        onChange={(event) => {
                            changeStart(index, indexHour, event);
                        }}
                    />
                    <Input
                        name="start"
                        label={t('labels.end')}
                        placeholder="HH:MM"
                        icon="clock"
                        value={element.end}
                        onChange={(event) => {
                            changeEnd(index, indexHour, event);
                        }}
                    />
                    <div className="trashButton">
                        <Button
                            text=""
                            icon="trash"
                            variant="ghost"
                            arrow={false}
                            disabled={false}
                            dataTestId={`btn-remove-work-time-${index}-${indexHour}`}
                            onClick={() => {
                                removeWorkTime(index, indexHour);
                            }}
                        />
                    </div>
                </>
            ))}
            <br />
            <div className="trashButton">
                <Button
                    text={t('labels.new')}
                    icon="add"
                    variant="primary"
                    arrow={false}
                    disabled={false}
                    dataTestId={`btn-add-work-time-${index}`}
                    onClick={() => {
                        addWorkTime(index);
                    }}
                />
            </div>
        </div>
    );
};

HoursList.propTypes = {
    workTimes: PropTypes.array,
    index: PropTypes.number,
    changeStart: PropTypes.func,
    changeEnd: PropTypes.func,
    removeWorkTime: PropTypes.func,
    addWorkTime: PropTypes.func
};

export default HoursList;
