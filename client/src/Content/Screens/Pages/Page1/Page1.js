import React from "react";
// import { Typography } from "@mui/material";
import {
  TypographyHeader,
  TypographyTitle,
  TypographyBody,
} from "../../../../Template/Components/Product/Style/Typography";

import { StackChart } from "../../../../Template/Components/Charts";
import dataChart from "./data/chart.csv";
import demo from "../../../Static/Media/demo.jpg";

export default function Page1() {
  let defaultWidth = 600;
  let defaultHeight = 300;

  if (typeof window !== `undefined`) {
    defaultWidth =
      window.innerWidth > defaultWidth ? defaultWidth : window.innerWidth - 80;
    defaultHeight = defaultWidth / 2;
  }

  let demoImage = (
    <div
      style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={demo}
        alt="demo"
        style={{
          width: `${defaultWidth}px`,
        }}
      />
    </div>
  );

  document.title = "Ambiguity in the financial markets";

  return (
    <>
      <TypographyHeader>Ambiguity in the financial markets</TypographyHeader>
      <TypographyBody>
        Numerous machine learning techniques employ stochastic optimization to
        optimize the expected performance or loss, such as the mean squared
        error for regressions or the expected discounted return in reinforcement
        learning. A solid machine learning model requires accurate estimations
        of the distribution of the data-generating process. Nonetheless, the
        distribution of the data may be unpredictable for a variety of reasons:
        insufficient observations in the stationary case, a time-varying law in
        the non-stationary example, or a law sensitive to policy intervention
        due to the treatment effect. In robust statistics, a solution to
        distributional uncertainty in the data is to formulate a decision-making
        problem as a DRO problem.
      </TypographyBody>

      {dataChart.length > 0 && (
        <center>
          <StackChart
            data={dataChart}
            size={{ width: defaultWidth, height: defaultHeight }}
          />
        </center>
      )}

      <TypographyTitle>
        Unstructured Data: The main source of information
      </TypographyTitle>
      <TypographyBody>
        Unlike structured data — which is organized in a searchable format, like
        a database — unstructured data doesn’t adhere to conventional data
        models. These forms of data are often more challenging to interpret, the
        Deloitte report said, but can deliver a more comprehensive and holistic
        understanding of the bigger picture. Because structured data is easier
        to work with, companies have already been able to do a lot with it.
        Unstructured data, by its definition, is data that doesn’t exist in a
        pre-defined model. So, this could include video, audio or entire
        documents or emails. Since files themselves contain dates, times, facts
        and opinions they hold a wealth of information. Yet, because this isn’t
        in a format that can be processed through traditional data analytics,
        banks have struggled to analyse it.
      </TypographyBody>
      {demoImage}

      <TypographyTitle>Feature Selection</TypographyTitle>
      <TypographyBody>
        Almost seldom, when developing a machine learning model in practice, are
        all variables in the dataset usable for building the model. Adding
        redundant variables affects the model's capacity to generalize and may
        also reduce a classifier's overall accuracy. Adding ever more variables
        to a model raises the model's overall complexity. According to Occam's
        Razor's Law of Parsimony, the best explanation for a problem is the one
        that makes the fewest assumptions. Consequently, feature selection
        becomes an essential component of developing machine learning models.
      </TypographyBody>
      {demoImage}

      <TypographyTitle>Financial Modeling</TypographyTitle>
      <TypographyBody>
        Utilization of machine learning in finance has developed significantly
        during the past decade. Learning by machine is a novel methodological
        development. Finance employs a variety of machine learning techniques
        (supervised, unsupervised, reinforcement learning, and others) to handle
        problems that are fundamentally distinct from those addressed by
        conventional economic approaches. The most valued application of machine
        learning in finance is process automation. The technique of machine
        learning can automate repetitive operations, substitute manual labor,
        and boost production. Companies are able to minimize their costs,
        improve consumer experiences, and scale up their services thanks to
        machine learning.
      </TypographyBody>
      {demoImage}

      <TypographyTitle>Backtest</TypographyTitle>
      <TypographyBody>
        Backtesting is the standard way for determining how a strategy or model
        would have performed in the past. Backtesting evaluates a trading
        strategy's viability by determining how it would have performed using
        previous data. If backtesting is effective, traders and analysts may
        have the confidence to use it in the future. A well-executed backtest
        that delivers favorable results reassures traders that the strategy is
        fundamentally sound and likely to generate profits when applied in the
        real world. A well-executed backtest that provides unsatisfactory
        results, on the other hand, will drive traders to modify or reject the
        strategy.
      </TypographyBody>
      {demoImage}

      <TypographyTitle>Trading Strategies</TypographyTitle>
      <TypographyBody>
        There are two possible methods for developing strategies: model-based
        and data mining. These are fundamentally contradictory approaches. In
        model-based strategy development, we begin with a model of a market
        inefficiency, establish a mathematical representation of it, and assess
        its long-term viability. Typically, this model is a simplification of
        the actual complex model, and its long-term importance and stability
        must be confirmed. This category includes prevalent trend-following,
        mean-reversion, and arbitrage methods. In contrast, the data mining
        approach begins by searching for pricing trends and then attempting to
        fit an algorithm to them. It is irrelevant what generates these
        patterns, simply that they will continue to repeat in the future. This
        is a blind strategy, and we require rigorous checks to distinguish
        between real and random patterns. This area includes trial-and-error TA,
        candle patterns, and regression on a large number of features.
      </TypographyBody>
      {demoImage}

      <TypographyTitle>Portfolio Optimization</TypographyTitle>
      <TypographyBody>
        Risk-based and heuristic portfolio construction methods have recently
        received a great deal of attention from both academics and practitioners
        because they do not rely on the estimation of expected returns and are
        therefore believed to be more stable than Markowitz's conventional
        mean-variance portfolio. In 2016, Lopez de Prado introduced Hierarchical
        Risk Parity (HRP), a new technique to portfolio formation that blends
        hierarchical clustering of assets with a heuristic risk-based allocation
        strategy to improve out-of-sample performance and promote portfolio
        stability. Lopez de Prado was able to show encouraging findings using
        Monte Carlo simulations.
      </TypographyBody>
      {demoImage}

      <TypographyTitle>Risk Management</TypographyTitle>
      <TypographyBody>
        Risk management is the process of identifying, analyzing, and accepting
        or mitigating uncertainty in investment choices in the financial sector.
        In essence, risk management happens when an investor or fund manager
        examines and attempts to quantify the potential for losses in an
        investment, such as moral hazard, and then takes the proper action or
        inaction in light of the fund's investment objectives and risk
        tolerance. Risk is inseparable from return. Every investment has some
        degree of risk, which is near to zero for U.S. Treasury bills and quite
        high for emerging-market shares and real estate in highly inflationary
        environments. Risk can be measured in both absolute and relative levels.
        A solid grasp of risk in its various manifestations can help investors
        comprehend the opportunities, trade-offs, and costs associated with
        various investing strategies.
      </TypographyBody>
      {demoImage}

      <TypographyTitle>Climate Risk</TypographyTitle>
      <TypographyBody>
        Climatic change is the long-term evolution of global climate patterns.
        These alterations are typically attributable to human activity, such as
        the consumption of nonrenewable resources such as fossil fuels. These
        energy sources contribute to global warming by releasing greenhouse
        gases into the atmosphere when they are burned. Climate money is a means
        by which individuals and nations may combat climate change. Climate
        financing has both broad and specific applications. In its broadest
        definition, it refers to a business that employs financial institutions
        or technologies to promote environmental sustainability, such as by
        creating or deploying additional solar panels or other renewable energy
        sources. Climate financing, in its narrow sense, refers to the transfer
        of funds from industrialized to developing nations in accordance with
        international agreements such as the Paris Agreement of 2016.
      </TypographyBody>
      {demoImage}

      <TypographyTitle>Differential Equations</TypographyTitle>
      <TypographyBody>
        As essential and pervasive as they are in science and engineering,
        partial differential equations are notoriously difficult to solve,
        assuming they can be solved at all. Even when approximate methods are
        employed to solve them, it might take millions of CPU hours to solve
        complex PDEs. As the complexity of the challenges we face increases,
        from constructing more efficient rocket engines to simulating climate
        change, we will require more effective and efficient methods for solving
        these equations. Now, scientists have developed artificial neural
        networks that can approximate solutions to partial differential
        equations orders of magnitude faster than conventional PDE solvers. And
        once trained, the new neural networks can solve an entire family of PDEs
        without additional training.
      </TypographyBody>
      {demoImage}

      <TypographyTitle>Cryptocurrencies</TypographyTitle>
      <TypographyBody>
        Cryptocurrencies are digital or virtual currencies that are supported by
        cryptographic protocols. They enable safe internet transactions without
        the use of intermediaries. The term "Crypto" refers to the many
        encryption algorithms and cryptographic techniques used to protect these
        entries, such as elliptical curve encryption, public-private key pairs,
        and hashing. One can mine cryptocurrencies or purchase them on
        cryptocurrency exchanges. Not all ecommerce websites accept
        cryptocurrency payments. Even prominent cryptocurrencies such as Bitcoin
        are rarely used for retail purchases. However, cryptocurrencies' rising
        value has made them attractive as trading instruments. In a limited
        capacity, they are also used for international transfers.
      </TypographyBody>
      {demoImage}
    </>
  );
}
