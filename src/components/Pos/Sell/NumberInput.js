import React from 'react';

const NumberInput = ({ name, icon, handleForm }) => {
    return (
        <>
            <div className="col-12 col-md-4">
                <div className="mb-1">
                    <label className="form-label" htmlFor={name}>
                        {name}
                    </label>
                    <div data-v-aa799a9e role="group" className="input-group">
                        <input
                            onChange={(e) => handleForm(e)}
                            name={name.toLowerCase()}
                            id={name.toLowerCase()}
                            className="form-control" placeholder="00" type="number" />

                        <div data-v-aa799a9e className="input-group-prepend">
                            <div data-v-aa799a9e className="input-group-text">
                                {icon}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NumberInput;