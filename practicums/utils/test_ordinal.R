
numSamples = 1000

rs <- webppl(program_file = "utils/testOrdinal.wppl",
             packages = c("./utils"), output_format = "samples",
             inference_opts = list(method = "MCMC",
                                   samples = numSamples,
                                   burn = numSamples / 2,
                                   verbose = TRUE),
             model_var = "model")

rs %>%
  gather(key, val) %>%
  ggplot(., aes(x = val))+
  geom_histogram()+
  facet_wrap(~key)