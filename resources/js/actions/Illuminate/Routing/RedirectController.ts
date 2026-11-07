import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
const RedirectController03c0bfffca87a4f02ec7ba4cad43b41e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
    method: 'get',
})

RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admission',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url = (options?: RouteQueryOptions) => {
    return RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
    const RedirectController03c0bfffca87a4f02ec7ba4cad43b41eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
        RedirectController03c0bfffca87a4f02ec7ba4cad43b41eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
        RedirectController03c0bfffca87a4f02ec7ba4cad43b41eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
        RedirectController03c0bfffca87a4f02ec7ba4cad43b41eForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
        RedirectController03c0bfffca87a4f02ec7ba4cad43b41eForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
        RedirectController03c0bfffca87a4f02ec7ba4cad43b41eForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
        RedirectController03c0bfffca87a4f02ec7ba4cad43b41eForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admission'
 */
        RedirectController03c0bfffca87a4f02ec7ba4cad43b41eForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectController03c0bfffca87a4f02ec7ba4cad43b41e.form = RedirectController03c0bfffca87a4f02ec7ba4cad43b41eForm
    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
const RedirectController305adef6a890eebf220da64f8cb0be16 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
    method: 'get',
})

RedirectController305adef6a890eebf220da64f8cb0be16.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/PPDB',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
RedirectController305adef6a890eebf220da64f8cb0be16.url = (options?: RouteQueryOptions) => {
    return RedirectController305adef6a890eebf220da64f8cb0be16.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
RedirectController305adef6a890eebf220da64f8cb0be16.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
RedirectController305adef6a890eebf220da64f8cb0be16.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
RedirectController305adef6a890eebf220da64f8cb0be16.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
RedirectController305adef6a890eebf220da64f8cb0be16.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
RedirectController305adef6a890eebf220da64f8cb0be16.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
RedirectController305adef6a890eebf220da64f8cb0be16.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
RedirectController305adef6a890eebf220da64f8cb0be16.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
    const RedirectController305adef6a890eebf220da64f8cb0be16Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
        RedirectController305adef6a890eebf220da64f8cb0be16Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
        RedirectController305adef6a890eebf220da64f8cb0be16Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController305adef6a890eebf220da64f8cb0be16.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
        RedirectController305adef6a890eebf220da64f8cb0be16Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController305adef6a890eebf220da64f8cb0be16.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
        RedirectController305adef6a890eebf220da64f8cb0be16Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController305adef6a890eebf220da64f8cb0be16.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
        RedirectController305adef6a890eebf220da64f8cb0be16Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController305adef6a890eebf220da64f8cb0be16.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
        RedirectController305adef6a890eebf220da64f8cb0be16Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController305adef6a890eebf220da64f8cb0be16.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB'
 */
        RedirectController305adef6a890eebf220da64f8cb0be16Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController305adef6a890eebf220da64f8cb0be16.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectController305adef6a890eebf220da64f8cb0be16.form = RedirectController305adef6a890eebf220da64f8cb0be16Form
    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
const RedirectControllerea77aaf92171d8a899da91a4d88f411f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
    method: 'get',
})

RedirectControllerea77aaf92171d8a899da91a4d88f411f.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/PPDB/cek-hasil',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
RedirectControllerea77aaf92171d8a899da91a4d88f411f.url = (options?: RouteQueryOptions) => {
    return RedirectControllerea77aaf92171d8a899da91a4d88f411f.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
RedirectControllerea77aaf92171d8a899da91a4d88f411f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
RedirectControllerea77aaf92171d8a899da91a4d88f411f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
RedirectControllerea77aaf92171d8a899da91a4d88f411f.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
RedirectControllerea77aaf92171d8a899da91a4d88f411f.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
RedirectControllerea77aaf92171d8a899da91a4d88f411f.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
RedirectControllerea77aaf92171d8a899da91a4d88f411f.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
RedirectControllerea77aaf92171d8a899da91a4d88f411f.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
    const RedirectControllerea77aaf92171d8a899da91a4d88f411fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
        RedirectControllerea77aaf92171d8a899da91a4d88f411fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
        RedirectControllerea77aaf92171d8a899da91a4d88f411fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
        RedirectControllerea77aaf92171d8a899da91a4d88f411fForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
        RedirectControllerea77aaf92171d8a899da91a4d88f411fForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
        RedirectControllerea77aaf92171d8a899da91a4d88f411fForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
        RedirectControllerea77aaf92171d8a899da91a4d88f411fForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/PPDB/cek-hasil'
 */
        RedirectControllerea77aaf92171d8a899da91a4d88f411fForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerea77aaf92171d8a899da91a4d88f411f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectControllerea77aaf92171d8a899da91a4d88f411f.form = RedirectControllerea77aaf92171d8a899da91a4d88f411fForm

const RedirectController = {
    '/admission': RedirectController03c0bfffca87a4f02ec7ba4cad43b41e,
    '/PPDB': RedirectController305adef6a890eebf220da64f8cb0be16,
    '/PPDB/cek-hasil': RedirectControllerea77aaf92171d8a899da91a4d88f411f,
}

export default RedirectController