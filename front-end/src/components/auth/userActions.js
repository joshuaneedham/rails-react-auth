axios
			.post(
				'http://localhost:3001/api/v1/registrations',
				{
					user: {
						user_name: user_name,
						email: email,
						password: password,
						password_confirmation: password_confirmation,
					},
				},
				{ withCredentials: true },
			)
			.then((response) => {
				if (response.data.status === 'created') {
					this.props.handleSuccessfulAuth(response.data);
				}
			})
			.catch((error) => {
				// Add popup alert for error handling in place of console.log
				console.log('registration error', error);
			});
		event.preventDefault();
	}