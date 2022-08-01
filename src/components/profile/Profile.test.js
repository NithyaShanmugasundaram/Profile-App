import { render, screen, waitFor, within } from '@testing-library/react';
import React from 'react';
import Profile from './Profile';
import user from '@testing-library/user-event';
import { Provider } from "react-redux";
import { ThemeProvider } from '@emotion/react';
import { customTheme } from '../../styles/theme';
import store from "../../store";


describe('<Profile/>', () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<ThemeProvider theme={customTheme}>
            <Provider store={store}><Profile onSubmit={onSubmit} /></Provider>
        </ThemeProvider>)
    });

    test('onSubmit is called when all fields pass validation', async () => {
        user.type(getFirstName(), 'Jai');
        user.type(getLastName(), 'Sakthi');
        user.type(getEmail(), 'Sakthi@gmail.com');
        () => { clickSubmitButton() }

        await (() => {
            expect(onSubmit).toHaveBeenCalledWith(

                { first_name: 'Jai', last_name: "Sakthi", email: "Sakthi@gmail.com" }

            );
            expect(jest.fn()).toHaveBeenCalledTimes(1);
        });

    });
    test('renders the profile component', () => {
        render(
            <ThemeProvider theme={customTheme}>
                <Provider store={store}>
                    <Profile />
                </Provider>
            </ThemeProvider>
        );

    });
    test('first name field is required', async () => {
        await (() => {
            expect(getFirstName()).toHaveErrorMessage('Firstname is required');
        });
    });
    test('last name field is required', async () => {
        await (() => {
            expect(getLastName()).toHaveErrorMessage('Lastname is required');
        });
    });
    test('email field is required', async () => {
        await (() => {
            expect(getEmail()).toHaveErrorMessage('Email is required');
        });
    });

    it('shows error when email is not in a valid format', async () => {
        user.type(getEmail(), 'Carlosdfsdf');
        user.tab();

        await (() => {
            expect(getEmail()).toHaveErrorMessage(
                `Invalid email address.`
            );
        });
    });


})
function clickSubmitButton() {
    user.click(screen.getByText(/Add Profile/i));
}
function getFirstName() {
    return screen.getByLabelText(/First Name/i);
}
function getLastName() {
    return screen.getByLabelText(/Last Name/i);
}
function getEmail() {
    return screen.getByLabelText(/Email/i);
}





