import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PPDBController::pmbm
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/pmbm/{kode}'
 */
export const pmbm = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pmbm.url(args, options),
    method: 'get',
})

pmbm.definition = {
    methods: ["get","head"],
    url: '/verifikasi/pmbm/{kode}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PPDBController::pmbm
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/pmbm/{kode}'
 */
pmbm.url = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kode: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kode: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kode: args.kode,
                }

    return pmbm.definition.url
            .replace('{kode}', parsedArgs.kode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::pmbm
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/pmbm/{kode}'
 */
pmbm.get = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pmbm.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::pmbm
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/pmbm/{kode}'
 */
pmbm.head = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pmbm.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PPDBController::pmbm
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/pmbm/{kode}'
 */
    const pmbmForm = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pmbm.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PPDBController::pmbm
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/pmbm/{kode}'
 */
        pmbmForm.get = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pmbm.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PPDBController::pmbm
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/pmbm/{kode}'
 */
        pmbmForm.head = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pmbm.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pmbm.form = pmbmForm
const verifikasi = {
    pmbm: Object.assign(pmbm, pmbm),
}

export default verifikasi