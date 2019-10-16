def get_solution_improvement_query():
    return {
        'limetype': 'solutionimprovement',
        'responseFormat': {
            'object': {
                'title': None,
                'priority': None,
                'coworkercreatedby': None,
                'card': None,
                'misc': None,
                'comment': None,
                'solutionimprovementstatus': None,
                'coworker': None,
            }
        }
    }


""" solutionimprovement = {
    'limetype': 'solutionimprovement',
    'responseFormat': {
        'object': {
            'title': None,
            'priority': None,
            'coworkercreatedby': None,
            'card': None,
            'misc': None,
            'comment': None,
            'solutionimprovementstatus': None,
            'coworker': None,
        }
    }
} """

deal = {
    'limetype': 'deal',
    'responseFormat': {
        'object': {
            'name': None,
            'company': None,
            'person': None,
            'coworker': None,
            'dealstatus': None,
            'value': None,
            'probability': None
        }
    }
}

company = {
    'limetype': 'company',
    'responseFormat': {
        'object': {
            'name': None,
            'buyingstatus': None,
            'coworker': None,
            'postaladdress1': None,
            'visitingaddress1': None,
            'postalzipcode': None,
            'postalcity': None,
            'visitingzipcode': None,
            'visitingcity': None,
            'country': None,
            'phone': None,
        }
    }
}
